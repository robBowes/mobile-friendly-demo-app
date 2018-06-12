const mapById = (acc, el)=>{
    acc[el.id] = el;
    return acc;
};

export {
    mapById,
};
