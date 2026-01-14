from fastapi import FastAPI
from config import engine

import tables.users as user_tables

import routes.users as user_routes

from fastapi.middleware.cors import CORSMiddleware

user_tables.Base.metadata.create_all(bind=engine)


app = FastAPI()

app.include_router(user_routes.router,prefix='/api')

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Адрес вашего фронтенда
    allow_credentials=True,
    allow_methods=["*"],  # Разрешить все методы (GET, POST и т.д.)
    allow_headers=["*"],  # Разрешить все заголовки
)











