import { getAllProfilesService, getSingleProfileService, githubAnalyzerService } from "../services/github.service.js";
import { errorResponse, successResponse } from "../utils/responses.js";


export const analyze = async (req, res) => {
    try {
        const { username } = req.body;

        if (!username) {
            return errorResponse(res, "Username is required");
        }

        const data = await githubAnalyzerService(username);

        return successResponse(res, "Profile analyzed successfully", data);

    } catch (error) {
        return errorResponse(res, error.message);
    }
};
export const getAllProfiles = async (req, res) => {
    try {

        const profiles = await getAllProfilesService();

        return successResponse(
            res,
            "Profiles fetched successfully",
            profiles
        );

    } catch (error) {
        console.log(error);
        return errorResponse(res, "Error occured in getAllProfiles Api");
    }
};
// get single profile
export const getProfile = async (req, res) => {

    try {
        const { username } = req.body;
        if (!username) {
            return errorResponse(res, "username is required");
        }
        const getProfile = await getSingleProfileService(username);
        return successResponse(res, "Profile fetch successfully!", getProfile);
    } catch (error) {
        console.log(error);
        return errorResponse(res, "Error occured in getProfile Api");
    }


}