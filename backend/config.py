from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker,DeclarativeBase

DATABASE_URL = "postgresql://postgres:postgres@localhost:5432/test_api"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base = declarative_base()

class Base(DeclarativeBase): pass

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


SECRET_KEY = 'double_dog123'
ALGORITHM = 'HS256'
ACCESS_TOKEN_EXPIRE_MINUTES = 30




