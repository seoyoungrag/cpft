package kr.co.teamfresh.cpft.common.advice.exception;

public class CPasswordNotMatchedException extends RuntimeException {
    public CPasswordNotMatchedException(String msg, Throwable t) {
        super(msg, t);
    }

    public CPasswordNotMatchedException(String msg) {
        super(msg);
    }

    public CPasswordNotMatchedException() {
        super();
    }
}