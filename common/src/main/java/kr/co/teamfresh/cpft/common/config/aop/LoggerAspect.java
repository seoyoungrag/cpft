package kr.co.teamfresh.cpft.common.config.aop;


import java.util.Date;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.google.gson.Gson;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.json.simple.JSONObject;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import lombok.extern.slf4j.Slf4j;

@Component
@Aspect
@Slf4j
public class LoggerAspect {
    @Pointcut("execution(* kr.co.teamfresh.cpft..controller..*(..))") // 이런 패턴이 실행될 경우 수행
    public void loggerPointCut() {
    }

    @Around("loggerPointCut()")
    public Object methodLogger(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
        try {
            Object result = proceedingJoinPoint.proceed();
            HttpServletRequest request = ((ServletRequestAttributes)RequestContextHolder.getRequestAttributes()).getRequest(); // request 정보를 가져온다.

            String controllerName = proceedingJoinPoint.getSignature().getDeclaringType().getSimpleName();
            String methodName = proceedingJoinPoint.getSignature().getName();

            Map<String, Object> params = new HashMap<>();

            Gson gson = new Gson();
            String json = null;
            try {
                params.put("req_controller", controllerName);
                params.put("req_method", methodName);
                params.put("req_log_time", new Date());
                params.put("req_request_uri", request.getRequestURI());
                params.put("req_http_method", request.getMethod());
                params.put("req_params", getParamsJson(request));
                json = gson.toJson(params);
            } catch (Exception e) {
                log.error("LoggerAspect error", e);
            }
            //log.info("params : {}", params); // param에 담긴 정보들을 한번에 로깅한다.
            //log.info("params : {}", json);
            log.info(json);

            return result;

        } catch (Throwable throwable) {
            throw throwable;
        }
    }

    /**
     * request 에 담긴 정보를 JSONObject 형태로 반환한다.
     * @param request
     * @return
     */
    private static JSONObject getParamsJson(HttpServletRequest request) {
        JSONObject jsonObject = new JSONObject();
        Enumeration<String> params = request.getParameterNames();
        while (params.hasMoreElements()) {
            String param = params.nextElement();
            String replaceParam = param.replaceAll("\\.", "-");
            replaceParam = replaceParam.replaceAll("\\[", "-");
            replaceParam = replaceParam.replaceAll("\\]", "");
            jsonObject.put(replaceParam, request.getParameter(param));
            /*jsonObject.put(param, request.getParameter(param));*/
        }
        return jsonObject;
    }

    /**
     * request 에 담긴 정보를 JSONObject 형태로 반환한다.
     * @param request
     * @return
     */
    private static String getParamsObj(HttpServletRequest request) {
        Map<String, Object> tmpParams = new HashMap<>();
        Gson gson = new Gson();
        String json = null;
        Enumeration<String> params = request.getParameterNames();
        while (params.hasMoreElements()) {
            String param = params.nextElement();
            String replaceParam = param.replaceAll("\\.", "-");
            replaceParam = replaceParam.replaceAll("\\[", "-");
            replaceParam = replaceParam.replaceAll("\\]", "");
            tmpParams.put(replaceParam, request.getParameter(param));
            /*
            String replaceParam = param.replaceAll("\\.", "-");
            object.put(replaceParam, request.getParameter(param));
             */
        }
        json = gson.toJson(tmpParams);
        return json;
    }
}