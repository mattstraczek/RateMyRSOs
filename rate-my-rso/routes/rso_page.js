module.exports = function (router, connection) {

    var rsoRoute = router.route('/rso/:rso_name');

    rsoRoute.get(function (req, res) {
        res.json({ message: 'RSO route!' });
    });

    return router;
}