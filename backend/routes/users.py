from fastapi import APIRouter, Depends
from models.users import ResponseSchema,Register,Login,TokenResponse
from sqlalchemy.orm import Session
from config import get_db
from repository.users import JWTRepo,UsersRepo
from passlib.context import CryptContext
from tables.users import User
from passlib.hash import bcrypt
import hashlib
import bcrypt



router = APIRouter(
    tags={'Authentication'}
)

pwd_context = CryptContext(schemes=['bcrypt'],deprecated='auto')

def hash_password(password):
    password_bytes = password.encode('utf-8')
    
    sha256_hash = hashlib.sha256(password_bytes).digest()
    
    salt = bcrypt.gensalt()

    bcrypt_hash = bcrypt.hashpw(sha256_hash, salt)
    
    return bcrypt_hash.decode('utf-8')

def check_password(password, hashed):
    password_bytes = password.encode('utf-8')
    sha256_hash = hashlib.sha256(password_bytes).digest()
    return bcrypt.checkpw(sha256_hash, hashed.encode('utf-8'))


@router.post("/signup")
async def signup(request: Register,db:Session = Depends(get_db)):
    try:
        _user = User(
            # id=request.id,
            user_name=request.user_name,
            email=request.email,
            name=request.name,
            password = hash_password(request.password),
            phone_number=request.phone_number,
        )    

        UsersRepo.insert(db,_user)

        return ResponseSchema(
            code="200",
            status='ok',
            message="success",
        ).dict(exclude_none=True)

    except Exception as e:
        print(e.args)

        return ResponseSchema(code="500",status='error',message=str(e.args)).dict(exclude_none=True)

@router.post("/login")
async def login(request: Login, db: Session = Depends(get_db)):
    try:
        _user = UsersRepo.find_by_email(db,User,request.email)
        
        if not check_password(request.password,_user.password):
            print("Invalid Password")
            return ResponseSchema(code="400",message="Invalid Password").dict(exclude_none=True)
        
        token = JWTRepo.generate_token({'sub' : _user.user_name})
        
        return ResponseSchema(code="200",status='success',message="Login Success",result=TokenResponse(access_token=token, token_type="bearer")).dict(exclude_none=True)

    except Exception as e:
        print(e.args)

        return ResponseSchema(code="500",status='error',message=str(e.args)).dict(exclude_none=True)
