export const fetchUser = (userId) => {
    return $.ajax({
        url: `/api/users/${userId}`,
        method: 'GET',
    })
}

export const fetchUsers = () => {
    return $.ajax({
        url: `/api/users/`,
        method: 'GET',
    })
}

export const updateUser = (id, formData) => {
    return $.ajax({
        url: `/api/users/${id}`,
        method: 'PATCH',
        data: formData,
        processData: false,
        contentType: false
    })
}