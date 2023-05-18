import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  button: {
    height: '50@vs',
    borderRadius: '12@s',
    justifyContent: 'center',
    marginTop: '10@vs',
    marginBottom: '20@vs',
  },
  text: {
    fontSize: '14@s',
    textAlign: 'center',
    color: colors.textPrimary,
  },
}))
