const UserField = ({ name, surname, photo }) => {
    return <div className="flex flex-col justify-center border-2 border-white">
        <div className="font-bold text-center text-xl mb-2">{name + ' ' + surname}</div>
        <img className="w-1/3 self-center pb-2 rounded-2xl" src={photo}></img>
    </div>
}
export default UserField