function getListStudents() {
    return [
        { id: 1, firstName: 'Ziad', location: 'San Francisco' },
        { id: 2, firstName: 'James', location: 'Columbia' },
        { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ];
}

function getListStudentIds(students) {

	if (!Array.isArray(students)) {
        return [];
	}

	return students.map(student => student.id);
}

function getStudentsByLocation(students, city) {
	return students.filter(student => student.location === city);
}


function getStudentIdsSum(students) {
	return students.reduce((acc, student) => acc + student.id, 0);
}


const weakMap = new WeakMap();

function queryAPI(endpoint) {
	let count = weakMap.get(endpoint) || 0;
	count += 1;

	weakMap.set(endpoint, count);

	if (count >= 5) {
		throw new Error('Endpoint load is high');
	}
}


