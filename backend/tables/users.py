from sqlalchemy import TIMESTAMP, Column, Integer, Sequence, String, Boolean, DateTime, text
from config import Base
import datetime


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    user_name = Column(String, unique=True, nullable=False)
    name = Column(String, nullable=False)
    phone_number = Column(String)
    email = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(TIMESTAMP, server_default=text('CURRENT_TIMESTAMP'))
    updated_at = Column(TIMESTAMP, server_default=text('CURRENT_TIMESTAMP'), 
                       onupdate=text('CURRENT_TIMESTAMP'))






