## Server Set Up

Run the following commands to set up the environment:

```
cd server
python -m venv venv
. venv/Scripts/activate
python -m pip install --upgrade pip
pip install poetry
poetry install
```
And to run the server:
```
python -m powerdash.server
```
