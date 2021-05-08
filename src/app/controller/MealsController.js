const axios = require("axios")
const api = axios.create({
    baseURL: process.env.BASE_URL,
});



class SessionControler {
    async findAll(req, res, next) {
        const result = await api('/search.php?s=')
        let resultApi = []
        for (let i = 0; i < result.data.meals.length; i++) {
            const {

                strMeal,
                strCategory,
                strArea,
                strMealThumb,
                strInstructions
            } = result.data.meals[i]

            resultApi[i] = {
                id: i,
                name: strMeal,
                category: strCategory,
                area: strArea,
                thumbnail: strMealThumb,
                cookingInstructions: strInstructions
            }

        }

        if (!resultApi) {
            return res.status(400).send({ Error: "Erro na API TheMealsDB" })
        } else {
            return res.status(200).send(resultApi)
        }


    }

}

module.exports = new SessionControler();