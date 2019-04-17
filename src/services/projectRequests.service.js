import axios from 'axios';
import constantsService from './constants.service';

const createProjectRequest = async ({ name, company, email, number, location, budget, description, marketing }) => {
  return new Promise((resolve) => setTimeout(resolve, 5000))
}

export default {
  createProjectRequest,
}
