import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useUser } from "../context/UserContext";

export default function Menu() {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-[#111b21] flex">
      {/* Sidebar */}
      <div className="w-[400px] bg-[#111b21] border-r border-[#2a3942] flex flex-col">
        {/* Header */}
        <div className="bg-[#202c33] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-[#00a884] rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
              {user?.phoneNumber?.slice(-2)}
            </div>
            <span className="text-white text-sm font-medium">{user?.phoneNumber}</span>
          </div>
          <button
            onClick={() => signOut(auth)}
            className="text-[#8696a0] hover:text-white text-xs transition"
          >
            Salir
          </button>
        </div>

        {/* Search */}
        <div className="px-3 py-2 bg-[#111b21]">
          <div className="bg-[#202c33] rounded-lg px-4 py-2 flex items-center gap-2">
            <svg className="w-4 h-4 text-[#8696a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input
              placeholder="Buscar o empezar un chat"
              className="bg-transparent text-[#8696a0] text-sm outline-none w-full"
            />
          </div>
        </div>

        {/* Chat list placeholder */}
        <div className="flex-1 overflow-y-auto">
          {[1,2,3].map(i => (
            <div key={i} className="flex items-center gap-3 px-4 py-3 hover:bg-[#202c33] cursor-pointer border-b border-[#2a3942]">
              <div className="bg-[#2a3942] rounded-full w-12 h-12 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between">
                  <span className="text-white text-sm font-medium">Contacto {i}</span>
                  <span className="text-[#8696a0] text-xs">12:0{i}</span>
                </div>
                <p className="text-[#8696a0] text-xs truncate">Último mensaje...</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Panel derecho */}
      <div className="flex-1 bg-[#222e35] flex items-center justify-center">
        <div className="text-center">
          <div className="bg-[#00a884] rounded-full p-6 mx-auto mb-4 w-fit">
            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          <p className="text-[#8696a0] text-lg">Selecciona un chat para comenzar</p>
          <p className="text-[#8696a0] text-xs mt-2">Conectado como: {user?.phoneNumber}</p>
        </div>
      </div>
    </div>
  );
}