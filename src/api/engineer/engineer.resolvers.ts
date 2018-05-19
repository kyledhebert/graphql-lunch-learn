import * as DataLoader from 'dataloader'
import * as _ from 'lodash'
 

// a fake database
let engineers = [
    {
        id: "0",
        name: 'Dan',
        role: 'Engineering Team Lead',
        reportsTo: 'Cory'
    },
    {
        id: "1",
        name: 'Joe',
        role: 'Engineering Team Lead',
        reportsTo: 'Cory',
    },
    {
        id: "2",
        name: 'Tina',
        role: 'Engineering Team Lead',
        reportsTo: 'Cory'
    },
    {
        id: "3",
        name: 'Brad',
        role: 'Software Engineer',
        reportsTo: 'Dan'
    },
    {
        id: "4",
        name: 'Kameron',
        role: 'Software Engineer',
        reportsTo: 'Dan'
    },
    {
        id: "5",
        name: 'Scott',
        role: 'Senior Engineer',
        reportsTo: 'Dan'
    },
    {
        id: "6",
        name: 'Alex',
        role: 'Software Engineer',
        reportsTo: 'Joe'   
    },
    {
        id: "7",
        name: 'Lauren',
        role: 'Software Engineer',
        reportsTo: 'Joe' 
    },
    {
        id: "8",
        name: 'Jonathan',
        role: 'Software Engineer',
        reportsTo: 'Tina',
    },
    {
        id: "9",
        name: 'Kyle',
        role: 'Software Engineer',
        reportsTo: 'Tina'
    },
    {
        id: "10",
        name: "Cory",
        role: "Chief Information Officer",
        reportsTo: null
    }
];

let engineerCount = engineers.length;

const findByNameLoader = new DataLoader(async keys => {
    const engineers = await findBy('name', ...keys);
    return keys.map(k => engineers.find(e => e.name === k ) || {})
});


// a fake ORM method
const findBy = (field, ...values) => {
    console.log(`finding engineer where ${field} equals ${values.join(',')}`)
    return Promise.resolve(engineers.filter(engineer => values.indexOf(engineer[field]) > -1))
}

export const resolvers = {

    Query:  {
        engineer: async (_, args) => {
            const result = await findBy('id', args.id);
            return result[0];
        },
        engineers: () => {
            return engineers;
        }
    },
    
    Mutation:  {
        newEngineer: (_, args) => {
            console.log(args);
            const { name, role, reportsTo } = args.input;
            const engineer = {
                id:  '' +engineerCount++,
                name,
                role,
                reportsTo 
            }
            engineers.push(engineer)
            return engineer
        }
    },

    Engineer: {
        // reportsTo: ({reportsTo}) => {
        //     if (reportsTo) {
        //         return findByNameLoader.load(reportsTo)
        //     }
        // },
        reportsTo: async root => {
            const result = await findBy('name', root.reportsTo)
            return result[0];
        }
    } 
}