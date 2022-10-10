import { Image, Dimensions } from 'react-native';


//image's heigh and weight = 658 442
function FitImage({ src, media }) {

const width = Dimensions.get('window').width
const ratio = media.width / width
const height = media.height / ratio


    return (
        <Image style={{ width, height}}
            source={{ uri: media.src }}
        />
    )
}

export default FitImage 