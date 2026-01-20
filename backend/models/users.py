from typing import Generic,Optional,TypeVar
from pydantic.generics import GenericModel
from pydantic import BaseModel,Field

T = TypeVar("T")

class Login(BaseModel):
    email: str
    password: str

class Register(BaseModel):
    user_name: str
    password: str
    email: str
    phone_number: str

    name: str

class ResponseSchema(BaseModel):
    code: str
    message: str
    status: str
    result: Optional[T] = None

class TokenResponse(BaseModel):
    access_token: str
    token_type: str

class User(BaseModel):
    user_name: str
    email: str
    name: str
    password: str
    phone_number: str







