.PHONY: sync-repos

sync-repos:
	git pull github main
	git push origin main
