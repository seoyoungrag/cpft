
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>anonymous complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="ReSendEmailResult" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "reSendEmailResult"
})
@XmlRootElement(name = "ReSendEmailResponse")
public class ReSendEmailResponse {

    @XmlElement(name = "ReSendEmailResult")
    protected int reSendEmailResult;

    /**
     * reSendEmailResult �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getReSendEmailResult() {
        return reSendEmailResult;
    }

    /**
     * reSendEmailResult �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setReSendEmailResult(int value) {
        this.reSendEmailResult = value;
    }

}
