Le nombre maximum de paramètres dans une fonction doit être réduit au minimum.

En général, il est plus difficile de gérer des fonctions qui ont un grand nombre de paramètres, car cela peut augmenter le risque d'erreurs dans la transmission des données. Comme transmettre des paramètres dans le mauvais ordre , utiliser un type de données incorrect ou un format de données incompatible.

Si on a besoin de plus de paramètres que 2, on doit tous les mettre dans un objet puis les déstructurer.

//BAD
export const MyComponent = ({name, style, className, icon, status}) => {
return <div>{name}</div>;
};

<MyComponent name='' style={}   className='' icon="" status='' />

//GOOD
const name = "My Component";
const options = {
style: { color: "red" },
className: "toto",
icon: "icon",
status: "active"
};

export const MyComponent = ({ name, options }) => {
const { style, className, icon, status } = options;
return <div style={style}>{name}</div>;
};

<MyComponent name={name} options={options} />

MyComponent est passé de 5 paramètres à deux paramètres name et l’objet options déstructuré en 6 varaibles, ce qu’est acceptable. Donc , nous n'avons pas à se soucier de l'ordre des éléments passés avec les paramètres d'objet.
