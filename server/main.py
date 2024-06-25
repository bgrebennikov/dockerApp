from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes import UsersRoute

app = FastAPI()


@app.get("/")
async def home():
    return {
        "content": "Home Page (Fetched from API)"
    }


origins = [
    "http://localhost:5173",
    "http://localhost:8000",
    "http://localhost"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(UsersRoute.router)