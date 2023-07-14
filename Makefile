# Makefile

# Variables
FRONTEND_DIR := apps/supercredit-front
BACKEND_DIR := apps/supercredit-backend

.PHONY: start

start:
	@echo "Starting backend..."
	@cd $(BACKEND_DIR) && node index.js &

