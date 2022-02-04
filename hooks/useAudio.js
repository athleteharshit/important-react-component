import { useMemo, useEffect } from "react";
import { toast } from "react-toastify";
import { toastIdsConstant } from "../utility/toastIdsConstant";

const useAudio = (url) => {
	const audio = useMemo(() => new Audio(url), []);
	const play = () => {
		const audioPlay = audio.play();
		audioPlay
			.then(() => {
				console.log("playing sound !!!");
			})
			.catch((e) => {
				if (!toast.isActive(toastIdsConstant.audioPermission)) {
					toastIdsConstant.audioPermission = toast.warn(
						`Please allow audio permissions.`,
						{
							toastId: toastIdsConstant.audioPermission,
							className: "toast-warn",
							preventDuplicates: true,
							preventOpenDuplicates: true,
						}
					);
				}
				console.log(e);
			});
	};
	const stop = () => {
		if(audio){
			audio.pause();
			audio.currentTime = 0;	
		}
	};

	useEffect(() => {
		audio.loop = "loop";
		audio.addEventListener("ended", () => {});
		return () => {
			audio.removeEventListener("ended", () => {});
		};
	}, []);

	return [play, stop];
};

export default useAudio;
