// Import product model
Product = require('./productModel');
// Import product model
Login = require('./loginModel');

exports.login = function (req, res) {
    Login.get(function (err, login) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Login retrieved successfully",
            data: login
        });
    });
};
exports.loginnew = function (req, res) {
    var login = new Login();
    login.username = req.body.username ? req.body.username : login.username;
    login.password = req.body.password;
   
// save the contact and check for errors
    login.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New contact created!',
            data: login
        });
    });
};
// Handle index actions
exports.index = function (req, res) {
    Product.get(function (err, product) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json(product);
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var product = new Product();
    product.name = req.body.name ? req.body.name : product.name;
    product.des = req.body.des;
    product.qty = req.body.qty;
    product.rate = req.body.rate;
    product.total = req.body.total;
// save the product and check for errors
    product.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New contact created!',
            data: product
        });
    });
};
// Handle view product info
exports.view = function (req, res) {
    Product.findById(req.params.product_id, function (err, product) {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: product
        });
    });
};
// Handle update product info
exports.update = function (req, res) {
Product.findById(req.params.product_id, function (err, product) {
        if (err)
            res.send(err);
            product.name = req.body.name ? req.body.name : product.name;
            product.des = req.body.des;
            product.qty = req.body.qty;
            product.rate = req.body.rate;
            product.total = req.body.total;
// save the product and check for errors
        product.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'product Info updated',
                data: product
            });
        });
    });
};
// Handle delete product
exports.delete = function (req, res) {
    Product.remove({
        _id: req.params.product_id
    }, function (err, product) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'product deleted'
        });
    });
};