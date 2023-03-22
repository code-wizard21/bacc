
export default function Alert(prop) {
        const {title,description,status}=prop
        return {
                title: title,
                description: description,
                status: status,
                duration: 5000,
                isClosable: true,
                position:'top'
              }
}
        