// ? next คือ บอกให้ express รู้ว่า middleware ของเราทำงานเสร็จแล้ว
function logger(req, res, next) {
    try {
        console.log(`logger req to ${req.method} ${req.url}`);
        next()
    } catch (error) {
        console.error(`Error fetching data: ${err}`);
        next()
    }
}

module.exports = logger;