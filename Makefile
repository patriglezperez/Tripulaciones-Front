SENTRY_AUTH_TOKEN=bf7a9b917b20422aab1261587402488e181788296867414db52728813787afbf
SENTRY_ORG=app-0v
SENTRY_PROJECT=c02-commerce
REACT_APP_RELEASE_VERSION=`sentry-cli releases propose-version`
setup_release: create_release upload_sourcemaps
create_release:
    sentry-cli releases -o $(SENTRY_ORG) new -p $(SENTRY_PROJECT) $(REACT_APP_RELEASE_VERSION)

upload_sourcemaps:
    sentry-cli releases -o $(SENTRY_ORG) -p $(SENTRY_PROJECT) files $(REACT_APP_RELEASE_VERSION) \
        upload-sourcemaps --url-prefix "~/static/js" --validate build/static/js