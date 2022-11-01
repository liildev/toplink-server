const CHECK_EMAIL = `
    SELECT * FROM users WHERE email = $1
`;

const CHECK_ID = `
    SELECT * FROM users WHERE user_id = $1
`;

const CHANGE_PASSWORD = `
    UPDATE
        users
    SET
        password = crypt($1, gen_salt('bf'))
    WHERE
        user_id = $2
    RETURNING *;
`;

export default { CHECK_EMAIL, CHECK_ID, CHANGE_PASSWORD };
