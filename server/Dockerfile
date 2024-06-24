FROM python:3 as dev
LABEL authors="Boris"

WORKDIR /backend

COPY requirements.txt ./

RUN pip install -r requirements.txt

COPY . .

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--reload", "--port", "8000"]