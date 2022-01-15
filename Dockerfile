FROM node:lts as dependencies
WORKDIR /daniel.fashion
COPY package.json package-lock.json ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /daniel.fashion
COPY . .
COPY --from=dependencies /daniel.fashion/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /daniel.fashion
ENV NODE_ENV production
COPY --from=builder /daniel.fashion/next.config.js ./
COPY --from=builder /daniel.fashion/public ./public
COPY --from=builder /daniel.fashion/.next ./.next
COPY --from=builder /daniel.fashion/node_modules ./node_modules
COPY --from=builder /daniel.fashion/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]
