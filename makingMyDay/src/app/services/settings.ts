export class SettingsService {
    private diffBackground = false;
    setDiffBackground(isDiff: boolean) {
        this.diffBackground = isDiff;
    }

    hasDiffBackground(): boolean {
        return this.diffBackground;
    }
}