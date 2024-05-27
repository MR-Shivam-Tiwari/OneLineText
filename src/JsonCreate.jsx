import React, { useState } from 'react';

function JsonCreate() {
    const [fields, setFields] = useState([]);
    const [jsonList, setJsonList] = useState([]);
    const [newFieldName, setNewFieldName] = useState('');
    const [idCounter, setIdCounter] = useState(1);
    const [previousJsonList, setPreviousJsonList] = useState([]);
    const [filterFields, setFilterFields] = useState(false); // Added filter state

    const handleAddField = () => {
        if (newFieldName.trim() === '') return;
        setFields([...fields, { name: newFieldName, id: idCounter, value: '', subFields: [] }]);
        setNewFieldName('');
        setIdCounter(idCounter + 1);
    };

    const handleAddSubField = (parentId) => {
        const newFields = fields.map(field => {
            if (field.id === parentId) {
                return {
                    ...field,
                    subFields: [...field.subFields, { name: `line${field.subFields.length + 1}`, id: idCounter, value: '' }]
                };
            }
            return field;
        });
        setFields(newFields);
        setIdCounter(idCounter + 1);
    };

    const handleFieldChange = (id, value) => {
        setFields(fields.map(field => field.id === id ? { ...field, value } : field));
    };

    const handleSubFieldChange = (parentId, subFieldId, value) => {
        setFields(fields.map(field => {
            if (field.id === parentId) {
                return {
                    ...field,
                    subFields: field.subFields.map(subField => subField.id === subFieldId ? { ...subField, value } : subField)
                };
            }
            return field;
        }));
    };

    const handleCreateJson = () => {
        const newJsonFields = {};
        fields.forEach(({ name, value, subFields }) => {
            if (subFields.length > 0) {
                newJsonFields[name] = {};
                subFields.forEach(({ name: subFieldName, value: subFieldValue }) => {
                    newJsonFields[name][subFieldName] = subFieldValue;
                });
            } else {
                newJsonFields[name] = value;
            }
        });
        const newJson = { id: jsonList.length + 1, ...newJsonFields };
        setPreviousJsonList([...jsonList]);
        setJsonList([...jsonList, newJson]);
        setFields(fields.map(field => ({ ...field, value: '', subFields: [] })));
    };

    const handleUndo = () => {
        setJsonList([...previousJsonList]);
    };

    const handleClearJsonList = () => {
        setJsonList([]);
    };

    const handleToggleFilter = () => {
        setFilterFields(!filterFields);
    };

    const filteredFields = filterFields ? fields.map(field => ({ ...field, name: field.name.replace(/"/g, '') })) : fields;


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">JSON Creation App</h1>
            <div className="mb-4 flex flex-col sm:flex-row items-end gap-3">
                <div className="flex-1">
                    <label className="block mb-2">New Field Name:</label>
                    <input
                        type="text"
                        value={newFieldName}
                        onChange={(e) => setNewFieldName(e.target.value)}
                        className="border border-gray-300 p-2 rounded w-full"
                    />
                </div>
                <div className="flex-1">
                    <button
                        onClick={handleAddField}
                        className="bg-blue-500 text-white p-2 h-10 rounded mt-2 sm:mt-0"
                        disabled={!newFieldName.trim()}
                    >
                        Add Field
                    </button>
                </div>
                <div className="flex-1">
                    <button
                        onClick={handleCreateJson}
                        className="bg-green-500 text-white p-2 rounded mt-2 sm:mt-0"
                        disabled={filteredFields.length === 0}
                    >
                        Create JSON
                    </button>
                </div>
                <div className="flex-1">
                    <button
                        onClick={() => setFilterFields(!filterFields)}
                        className={`p-2 rounded mt-2 sm:mt-0 ${filterFields ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
                    >
                        {filterFields ? 'Filter Off' : 'Filter On'}
                    </button>
                </div>
                <div className="flex-1">
                    <button
                        onClick={handleUndo}
                        className="bg-yellow-500 text-white p-2 rounded mt-2 sm:mt-0"
                        disabled={previousJsonList.length === 0}
                    >
                        Undo
                    </button>
                </div>
                <button
                    onClick={handleClearJsonList}
                    className="bg-red-500 text-white p-2 rounded mt-4"
                    disabled={jsonList.length === 0}
                >
                    Clear JSON List
                </button>
            </div>
            {filteredFields.map(({ name, id, value, subFields }) => (
                <div key={id} className="flex items-end gap-2  border-gray-300 rounded">
                    <label className="block mb-1">{name}:</label>
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => handleFieldChange(id, e.target.value)}
                        className="border border-gray
                        300 p-2 rounded w-full"
                    />
                    {subFields.map(({ name: subFieldName, id: subFieldId, value: subFieldValue }) => (
                        <div key={subFieldId} className="mt-2">
                            <label className="block mb-1">{subFieldName}:</label>
                            <input
                                type="text"
                                value={subFieldValue}
                                onChange={(e) => handleSubFieldChange(id, subFieldId, e.target.value)}
                                className="border border-gray-300 p-2 rounded w-full"
                            />
                        </div>
                    ))}
                    <button
                        onClick={() => handleAddSubField(id)}
                        className="bg-blue-500 text-white p-2 h-10 rounded mt-2"
                    >
                        Add
                    </button>
                </div>
            ))}
            <div className='flex justify-between items-center mb-2'>
                <h2 className="text-xl font-bold mt-4">Created JSONs</h2>

            </div>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto">{JSON.stringify(jsonList, null, 2)}</pre>
        </div>
    );
}

export default JsonCreate;
