FROM keymetrics/pm2:10-alpine

# Bundle APP files
COPY packages /packages
COPY lerna.json .
COPY package.json .
COPY yarn.lock .

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN yarn run bootstrap

# Update pm2
RUN pm2 update

# Expose the listening port of your app
EXPOSE 3000

# Show current folder structure in logs
# RUN ls -al -R

CMD [ "pm2-runtime", "start", "packages/ems-api-server/ecosystem.config.js" ]
# CMD [ "pm2-runtime", "start", "packages/ems-api-server/ecosystem.config.js", "--web", "9000" ]
# CMD ["node", "packages/ems-api-server/index.js"]