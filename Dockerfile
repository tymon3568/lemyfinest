FROM node:20.9.0-alpine AS sk-build
WORKDIR /usr/src/app

# ARG TZ=Europe/Stockholm

COPY . /usr/src/app
RUN apk --no-cache add curl tzdata python3 py3-pip make g++
# RUN cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN npm install
RUN npm run build

FROM node:20.9.0-alpine
WORKDIR /usr/src/app

# ARG TZ=Europe/Stockholm
RUN apk --no-cache add curl  python3 py3-pip make g++
# RUN cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY --from=sk-build /usr/src/app/package.json /usr/src/app/package.json
COPY --from=sk-build /usr/src/app/package-lock.json /usr/src/app/package-lock.json
COPY --from=sk-build /usr/src/app/node_modules /usr/src/app/node_modules

COPY --from=sk-build /usr/src/app/build /usr/src/app/build
EXPOSE 3000
CMD ["node", "build/index.js"]