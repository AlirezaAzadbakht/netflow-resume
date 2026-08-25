.PHONY: deploy

deploy:
	docker-compose build --pull
	docker-compose down
	docker-compose up -d --remove-orphans

sync-repos:
	git pull github main
	git push origin main