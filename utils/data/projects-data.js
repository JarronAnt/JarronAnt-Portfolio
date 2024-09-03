import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Raytracer',
        description: "I built a complete cpu raytracer using nothing but c++ refrencing the book 'Ray Tracing in one weekend'. Project can be found at https://github.com/JarronAnt/RenderBoy",
        tools: ['C++'],
        role: 'Graphics Developer',
        code: '	*cam = new camera(lookFrom, lookAt, vec3(0, 1, 0),fov, aspect, aperture, distToFocus, 0.0, 1.0);',
        demo: '',
        image: ayla,
    },
    {
        id: 2,
        name: 'OpenGl Engine',
        description: 'I have , built a 3D graphics engine using Java and opengl as a method of learning the ins and outs of graphics development. Project can be found at https://github.com/JarronAnt/OpenGL-Engine ',
        tools: ['Java', 'OpenGL', "LWJGL"],
        role: 'Graphics Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 3,
        name: 'AI Powered Mario',
        description: 'I built an AI agent in python to play super mario bros. Project can be found at https://github.com/JarronAnt/Mario-RL',
        tools: ['Python', 'stable_baselines3', 'OpenAI Gym', 'numpy', 'OpenAI Retro'],
        code: '',
        role: 'AI Developer',
        demo: '',
        image: realEstate,
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },