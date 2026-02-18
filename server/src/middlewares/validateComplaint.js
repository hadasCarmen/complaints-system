const allowedCategories = ["food", "equipment", "orders", "other"]

export function validateComplaint(req, res, next) {
    const { category, message } = req.body

    if (!category || !message) {
        return res.status(400).json({
            error: "Category and message are required",
        })
    }

    if (!allowedCategories.includes(category)) {
        return res.status(400).json({
            error: "Invalid category",
        })
    }

    if (typeof message !== "string" || message.trim().length < 5) {
        return res.status(400).json({
            error: "Message must be at least 5 characters long",
        })
    }

    next()
}
