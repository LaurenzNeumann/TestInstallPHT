FROM vault:latest

# Install OpenSSL
RUN apk update && \
  apk add --no-cache openssl && \
  rm -rf "/var/cache/apk/*"

COPY generate_cert.sh /usr/local/bin/generate_cert.sh
RUN ["chmod", "+x", "/usr/local/bin/generate_cert.sh"]

ENTRYPOINT ["docker-entrypoint.sh"]