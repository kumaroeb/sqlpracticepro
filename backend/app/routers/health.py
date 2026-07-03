from fastapi import APIRouter

router = APIRouter(tags=["health"])


@router.get("/health")
def health_check() -> dict[str, str]:
    """Simple liveness check used by uptime monitors and deploy platforms."""
    return {"status": "ok"}
