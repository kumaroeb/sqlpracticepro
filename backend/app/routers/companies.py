from fastapi import APIRouter

router = APIRouter(prefix="/companies", tags=["companies"])

# Placeholder in-memory data. Replace with a database-backed model once
# Phase 2 (SQL Workspace + Postgres integration) is underway.
COMPANIES = [
    {
        "id": "streamflix",
        "name": "StreamFlix",
        "domain": "Movie Streaming Analytics",
        "status": "available",
    },
    {
        "id": "medcare",
        "name": "MedCare",
        "domain": "Hospital Analytics",
        "status": "coming-soon",
    },
    {
        "id": "shopsphere",
        "name": "ShopSphere",
        "domain": "E-commerce Analytics",
        "status": "coming-soon",
    },
    {
        "id": "campushub",
        "name": "CampusHub",
        "domain": "University Analytics",
        "status": "coming-soon",
    },
]


@router.get("")
def list_companies() -> list[dict]:
    """Return all Learning Worlds available on the platform."""
    return COMPANIES


@router.get("/{company_id}")
def get_company(company_id: str) -> dict:
    """Return a single Learning World by id, or an error payload if not found."""
    for company in COMPANIES:
        if company["id"] == company_id:
            return company
    return {"error": "not_found", "company_id": company_id}
