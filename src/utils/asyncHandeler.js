const asyncHandeler = (requestHandeler) => {
    (req, res, next) => {
        Promise.resolve(requestHandeler(req, res, next)).catch((err) => next(err))
    }
}

export {asyncHandeler}


// const asyncHandeler = () => {} // Normal
// const asyncHandeler = (func) => {} // Normally passing function
// const asyncHandeler = (func) => {() => {}} // Passing the function to another function - can also be written removing the brackets 

// const asyncHandeler = (fn) => async (req, res, next) = {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success : false,
//             message : error.message
//         })
//     }
// }
