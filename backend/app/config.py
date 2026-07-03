from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Central app configuration, populated from environment variables / .env."""

    app_name: str = "SQLPracticePro API"
    environment: str = "development"
    database_url: str = "postgresql://postgres:postgres@localhost:5432/sqlpracticepro"
    cors_origins: list[str] = ["http://localhost:5173"]

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")


settings = Settings()
