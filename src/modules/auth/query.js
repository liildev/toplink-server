const REGISTER = `
    INSERT INTO users (full_name, user_name, email, PASSWORD, number)
        VALUES ($1, $2, $3, crypt($4, gen_salt('bf')), $5) RETURNING *;
`;

const CHECK_EMAIL = `
    SELECT * FROM users WHERE email = $1
`;

const CHECK_USERNAME = `
    SELECT * FROM users WHERE user_name = $1
`;

const LOGIN = `
    SELECT * FROM users AS u WHERE u.email = $1 AND u.password = crypt($2, u.password);
`;

export default { REGISTER, CHECK_EMAIL, LOGIN, CHECK_USERNAME };
