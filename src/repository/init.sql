CREATE DATABASE topic_share;

CREATE USER topic_share;

ALTER USER topic_share WITH ENCRYPTED PASSWORD '';

GRANT ALL PRIVILEGES ON DATABASE topic_share TO topic_share;

-- log in as topic_share
CREATE SCHEMA topic_share;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE topics (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    content TEXT NOT NULL,
    sources TEXT[] NOT NULL,
    hashtags TEXT[] NOT NULL,
    ts TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

