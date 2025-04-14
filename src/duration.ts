export function formatDuration(seconds: number): string {
    var minutes = (seconds - (seconds % 60)) / 60
    var hours = (minutes - (minutes % 60)) / 60
    var formatedDuration = ""
    if (seconds-(minutes*60) > 0) {
        formatedDuration = ((seconds % 60)).toString() + "s"
    }
    if (minutes-(hours*60) > 0) {
        formatedDuration = (minutes-(hours*60)).toString() + "m" + formatedDuration
    }
    if (hours > 0) {
        formatedDuration = hours.toString() + "h" + formatedDuration
    }

    return formatedDuration  
}
