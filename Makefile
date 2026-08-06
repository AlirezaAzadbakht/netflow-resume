.PHONY: deploy

deploy:
	docker-compose build --pull
	docker-compose down
	docker-compose up -d --remove-orphans
