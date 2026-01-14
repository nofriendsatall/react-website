from typing import Generic,Optional,TypeVar
from pydantic.generics import GenericModel
from pydantic import BaseModel,Field

T = TypeVar("T")

class Login(BaseModel):
    username: str
    password: str

class Register(BaseModel):
    id: int
    username: str
    password: str
    email: str
    phone_number: str

    full_name: str

class ResponseSchema(BaseModel):
    code: str
    message: str
    status: str
    result: Optional[T] = None

class TokenResponse(BaseModel):
    access_token: str
    token_type: str







