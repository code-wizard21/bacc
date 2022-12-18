

export default function Alert(prop) {
        const {title,description,status}=prop
        //console.log(title)
        return {
                title: title,
                description: description,
                status: status,
                duration: 5000,
                isClosable: true,
                position:'top'
              }
}

/*const toast = useToast()
    let alertdata={
        title: ' Payment Declined',
        description: "Bank server is not responding",
        status: 'error',
      }

 toast(Alert(alertdata))
*/      
        