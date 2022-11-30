const { UserModel, BookModel } = require('../models');
const userModel = require('../models/user-model');

exports.getAllUsers = async (req, res) => {

    const users = await UserModel.find();

    if (users.lenght === 0) {
        return res.status(404).json({
            success: false,
            message: "No users found"
        });
    }

    res.status(200).json({
        success: true,
        data: users
    });
}

exports.getSingleUserById = async (req, res) => {
    const { id } = req.params

    const user = await userModel.findById({
        _id: id
    });

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }
    res.status(200).json({
        success: true,
        data: user
    });
}

exports.createNewUser = async (req, res) => {
    const { data } = req.body;

    const newUser = await UserModel.create(data);

    return res.status(201).json({
        success: true,
        data: newUser
    })
}

exports.updateUserById = async (req, res) => {
    const { id } = req.params;
    const { data } = req.body;

    const updatedUserData = await userModel.findOneAndUpdate({
        _id: id,
    }, {
        $set: {
            ...data,
        },
    },
        {
            new: true,
        })


    return res.status(200).json({
        success: true,
        data: updatedUserData
    });
}

exports.deleteUser = async (req, res) => {
    const { id } = req.params;

    const user = await userModel.deleteOne({
        _id: id,
    })

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        })
    }

    return res.status(202).json({
        success: true,
        message: "Deleted user successfully"
    });
}

exports.getSubscriptionDetailsById = async (req, res) => {
    const { id } = req.params;

    const user = await userModel.findById(id);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    const getDateInDays = (data = "") => {
        let date;
        if (data === "") {
            // current data
            date = new Date();
        } else {
            // date on basis of data variable
            date = new Date(data);
        }

        let days = Math.floor(date / (1000 * 60 * 60 * 24));
        return days;
    };


    const subscriptionType = (date) => {
        if (user.subscriptionType === "Basic") {
            date = date + 90;
        } else if (user.subscriptionType === "Standard") {
            date = date + 180;
        } else if (user.subscriptionType === "Premium") {
            date = date + 365;
        }

        return date;
    };

    // Subscription Expiration Calculation
    // January 1, 1970 UTC.  // milliseconds // date--> milliseconds

    let returnDate = getDateInDays(user.returnDate)
    let currentDate = getDateInDays();

    let subscriptionDate = getDateInDays(user.subscriptionDate)
    let SubscriptionExpiration = subscriptionType(subscriptionDate);

    const data = {
        ...user._doc,
        subscriptionExpired: SubscriptionExpiration < currentDate,
        daysLeftForExpiration:
            SubscriptionExpiration <= currentDate ? 0 : SubscriptionExpiration - currentDate,

        fine:
            returnDate < currentDate ?
                SubscriptionExpiration <= currentDate ? 200 : 100
                : 0,
    };

    res.status(200).json({
        success: true,
        data
    })
}