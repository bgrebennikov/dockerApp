from fastapi import APIRouter

router = APIRouter()


@router.get("/users")
async def get_users():
    return [
        dict(first_name='Boris', last_name='Grebennikov'),
        dict(first_name='Georgy', last_name='Zaitsev'),
        dict(first_name='Anonym', last_name='Anonym'),
    ]