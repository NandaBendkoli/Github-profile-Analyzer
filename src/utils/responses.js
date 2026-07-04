
export const successResponse = (res, msg, data = {}) => {

    return res.status(200).json({
        success: true,
        msg,
        data
    })

}

export const errorResponse = (res, msg) => {
    return res.status(400).json({
        success: false,
        msg
    })
}